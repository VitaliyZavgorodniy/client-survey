import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import styled from "styled-components";

import { AdminLayout } from "components/layout/AdminLayout";
import { FormsTable } from "components/table/FormsTable";
import { RadioFilter } from "components/inputs/RadioFilter";

import { fetchResponses } from "services/serviceAdmin";

const Forms = () => {
  const router = useRouter();

  const [listForms, setListForms] = useState(null);
  const [ratings, setRatings] = useState([
    { mark: 1, isActive: true },
    { mark: 2, isActive: true },
    { mark: 3, isActive: true },
    { mark: 4, isActive: true },
    { mark: 5, isActive: true },
  ]);

  const { from, to } = useSelector((store) => store.currentDate);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
  }, []);

  useEffect(() => {
    fetchResponses(from, to)
      .then((res) => setListForms(res))
      .catch((e) => console.error(e));
  }, [from, to]);

  const handleRatings = (index) => {
    const newState = [...ratings];
    newState[index].isActive = !newState[index].isActive;

    setRatings(newState);
  };

  const handleFilter = (list) => {
    const filteredList = list.filter((item) => {
      const { ratingCourier, ratingKitchen, ratingOperator, ratingSite } = item;

      for (let i = 0; i < ratings.length; i++) {
        if (
          (ratingKitchen === ratings[i].mark ||
            ratingCourier === ratings[i].mark ||
            ratingOperator === ratings[i].mark ||
            ratingSite === ratings[i].mark) &&
          ratings[i].isActive
        )
          return true;
      }
    });

    return filteredList;
  };

  return (
    <AdminLayout>
      <TitleBlock>
        <Title>Відповіді</Title>
        <RadioFilter handler={handleRatings} marks={ratings} />
      </TitleBlock>

      {listForms?.length && (
        <FormsTable data={handleFilter(listForms)} />
      )}
    </AdminLayout>
  );
};

const TitleBlock = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  margin-right: 20px;
`;

export default Forms;
