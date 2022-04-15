import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { FormLayout } from "components/layout/FormLayout.jsx";
import { ButtonSubmit } from "components/buttons/ButtonSubmit.jsx";
import { RadioRating } from "components/inputs/RadioRating.jsx";
import { CommentInput } from "components/inputs/CommentInput.jsx";

import { checkCompletionForm, publishForm } from "services/serviceForm";

export default function Form({ isCompleted, id }) {
  const router = useRouter();
  const {
    order,
    operator,
    kitchen,
    courier,
    phone,
    customername,
    created,
    confirmed,
    printed,
    sent,
    delivered,
  } = router.query;

  const [completed, setCompleted] = useState(isCompleted);
  const [isFetching, setIsFetching] = useState(false);
  const [rating, setRating] = useState({
    site: null,
    operator: null,
    courier: null,
    kitchen: null,
  });
  const [comment, setComment] = useState({
    site: "",
    operator: "",
    courier: "",
    kitchen: "",
  });
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let value = 0;
    for (const item in rating) if (rating[item] !== null) value++;
    if (value === 4) setIsReady(true);
    setProgress(value);
  }, [rating]);

  const handleComment = (id, value) => {
    setComment((state) => ({
      ...state,
      [id]: value,
    }));
  };

  const handleRating = (id, value) => {
    setRating((state) => ({
      ...state,
      [id]: value,
    }));
  };

  const sendForm = async () => {
    await setIsFetching(true);
    publishForm({
      id,
      ratingSite: rating.site,
      ratingOperator: rating.operator,
      ratingCourier: rating.courier,
      ratingKitchen: rating.kitchen,
      commentSite: comment.site,
      commentOperator: comment.operator,
      commentCourier: comment.courier,
      commentKitchen: comment.kitchen,
      order,
      operator,
      kitchen,
      courier,
      phone,
      customername,
      created,
      confirmed,
      printed,
      sent,
      delivered,
    })
      .then(() => {
        setCompleted(true);
        setIsFetching(false);
      })
      .catch((e) => {
        setIsFetching(false);
        console.error(e);
      });
  };

  const renderForm = () => {
    return (
      <Wrapper>
        <Title>Маєш зауваження?</Title>
        <Subtitle>Постав свою оцінку</Subtitle>

        <List>
          <Item>
            <RadioRating
              id='site'
              value={rating.site}
              onClick={handleRating}
              error={!rating.site ? true : false}
              title='1. Як тобі наш сайт? *'
            />
            <CommentInput
              id='site'
              placeholder='Є коментарі?'
              onChange={handleComment}
              value={comment.site}
            />
          </Item>

          <Item>
            <RadioRating
              id='operator'
              value={rating.operator}
              onClick={handleRating}
              error={!rating.operator ? true : false}
              title='2. Оціни роботу оператора *'
            />
            <CommentInput
              id='operator'
              placeholder='Є коментарі?'
              onChange={handleComment}
              value={comment.operator}
            />
          </Item>

          <Item>
            <RadioRating
              id='courier'
              value={rating.courier}
              onClick={handleRating}
              error={!rating.courier ? true : false}
              title="3. Оціни роботу кур'єра *"
            />
            <CommentInput
              id='courier'
              placeholder='Є коментарі?'
              onChange={handleComment}
              value={comment.courier}
            />
          </Item>

          <Item>
            <RadioRating
              id='kitchen'
              value={rating.kitchen}
              onClick={handleRating}
              error={!rating.kitchen ? true : false}
              title='4. Оціни смак страв *'
            />
            <CommentInput
              id='kitchen'
              placeholder='Є коментарі?'
              onChange={handleComment}
              value={comment.kitchen}
            />
          </Item>
        </List>

        <ButtonSubmit
          progress={progress}
          full={4}
          isReady={isReady}
          isFetching={isFetching}
          title='Оцінити'
          onClick={sendForm}
        />
      </Wrapper>
    );
  };

  const renderCompleted = () => (
    <Wrapper>
      <Title>Дякуємо за відгук!</Title>
      <Subtitle>Ваш відгук було надіслано</Subtitle>
    </Wrapper>
  );

  return (
    <FormLayout>{completed ? renderCompleted() : renderForm()}</FormLayout>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  margin: 35px auto;
`;

const Title = styled.div`
  text-align: center;
  font-size: 2.1rem;
  padding: 2px;
`;

const Subtitle = styled.p`
  text-align: center;
  padding: 0 0 15px 0;
  font-weight: 400;
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.div`
  width: 100%;
  background-color: #fff;
  margin-bottom: 15px;
  padding: 13px 8px;
  border-radius: 15px;
  box-shadow: 0px 0px 6px 0px #8ca1a5;
`;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const isCompleted = await checkCompletionForm(id);

  return {
    props: { isCompleted, id },
  };
}
