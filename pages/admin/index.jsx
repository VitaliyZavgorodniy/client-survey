import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import styled from "styled-components";

import { AdminLayout } from "components/layout/AdminLayout";
import { RatingTable } from "components/table/RatingTable";

import { fetchRatings } from "services/serviceAdmin";

const Admin = () => {
  const router = useRouter();

  const [dataRatingKitchen, setDataRatingKitchen] = useState([]);
  const [dataRatingCouriers, setDataRatingCouriers] = useState([]);
  const [dataRatingOperators, setDataRatingOperators] = useState([]);

  const { from, to } = useSelector((store) => store.currentDate);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
  }, []);

  useEffect(() => {
    fetchRatings(from, to).then((res) => {
      setDataRatingKitchen(res.kitchens);
      setDataRatingCouriers(res.kitchens);
      setDataRatingOperators(res.operators);
    });
  }, [from, to]);

  return (
    <AdminLayout>
      <Wrapper>
        <RatingTable
          data={dataRatingKitchen}
          type='ratingKitchen'
          list='kitchen'
          title='Кухня'
        />

        <RatingTable
          data={dataRatingCouriers}
          type='ratingCourier'
          list='kitchen'
          title='Курьер'
        />

        <RatingTable
          data={dataRatingOperators}
          type='ratingOperator'
          list='operator'
          title='Операторы'
        />
      </Wrapper>
    </AdminLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default Admin;
