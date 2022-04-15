import styled from "styled-components";
import { DateTime } from "luxon";

export const FormsTable = ({ data }) => {
  const formatDate = (date) =>
    DateTime.fromFormat(date, "yyyy-MM-dd HH:mm:ss").toFormat(
      "HH:mm dd.MM.yyyy"
    );

  const renderList = () => {
    const element = data.map((item) => {
      return (
        <TR key={item.id}>
          <TD>{item.ratingSite}</TD>
          <TD>{item.commentSite}</TD>

          <TD>{item.ratingOperator}</TD>
          <TD>{item.commentOperator}</TD>

          <TD>{item.ratingCourier}</TD>
          <TD>{item.commentCourier}</TD>

          <TD>{item.ratingKitchen}</TD>
          <TD>{item.commentKitchen}</TD>

          <TD>{item.phone}</TD>
          <TD>{item.kitchen}</TD>
          <TD>{item.operator}</TD>
          <TD>{item.courier}</TD>

          <TD>{formatDate(item.created)}</TD>
          <TD>{formatDate(item.confirmed)}</TD>
          <TD>{formatDate(item.printed)}</TD>
          <TD>{formatDate(item.sent)}</TD>
          <TD>{formatDate(item.delivered)}</TD>

          <TD>{item.customername}</TD>
          <TD>{item.order}</TD>
        </TR>
      );
    });

    return element;
  };

  return (
    <Wrapper>
      <Table>
        <THead>
          <HeadTR>
            <TH colSpan='2'>Сайт</TH>
            <TH colSpan='2'>Оператор</TH>
            <TH colSpan='2'>Курьер</TH>
            <TH colSpan='2'>Кухня</TH>
            <TH>Телефон</TH>
            <TH>Кухня</TH>
            <TH>Оператор</TH>
            <TH>Курьер</TH>
            <TH>created</TH>
            <TH>confirmed</TH>
            <TH>printed</TH>
            <TH>sent</TH>
            <TH>delivered</TH>
            <TH>Клиент</TH>
            <TH>Заказ</TH>
          </HeadTR>
        </THead>

        <TBody>{data && renderList()}</TBody>
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 5px;
`;

const Table = styled.table`
  width: 100%;
`;

const THead = styled.thead`
  background-color: #ed3644;
`;

const HeadTR = styled.tr`
  border: 1px solid #ed3644;
`;

const TH = styled.th`
  padding: 3px;
  color: #fff;
  font-family: Nunito, sans-serif;
  font-weight: 400;
`;

const TBody = styled.tbody`
  background-color: #eeeeee;
`;

const TR = styled.tr`
  border: 1px solid #9d9d9d;
`;

const TD = styled.td`
  padding: 3px;
  border-left: 1px solid #9d9d9d;
`;
