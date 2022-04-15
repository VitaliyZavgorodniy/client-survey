import NextCors from "nextjs-cors";
import { connectToDatabase } from "util/mongodb";

export default async (req, res) => {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
  
  const { db } = await connectToDatabase();
  const { from_date, to_date } = req.body;

  const result = await db
    .collection("surveys")
    .find({
      delivered: {
        $gte: from_date,
        $lt: to_date,
      },
    })
    .toArray();

  const formKitchens = () => {
    const arrayFilter = new Set();
    for (const obj of result) {
      arrayFilter.add(obj.kitchen);
    }
    const kitchens = Array.from(arrayFilter);

    const filteredMarks = () => {
      const filteredResult = kitchens.map((item, index) => {
        return result.filter((el) => {
          return el.kitchen === item;
        });
      });

      const calculatedResult = filteredResult.map((item, index) => {
        let ratingKitchen = {
          mark1: {
            count: 0,
            persent: 0,
          },
          mark2: {
            count: 0,
            persent: 0,
          },
          mark3: {
            count: 0,
            persent: 0,
          },
          mark4: {
            count: 0,
            persent: 0,
          },
          mark5: {
            count: 0,
            persent: 0,
          },
          sum: 0,
        };

        for (const el of item) {
          ratingKitchen.sum++;
          if (el.ratingKitchen === 1) ratingKitchen.mark1.count++;
          else if (el.ratingKitchen === 2) ratingKitchen.mark2.count++;
          else if (el.ratingKitchen === 3) ratingKitchen.mark3.count++;
          else if (el.ratingKitchen === 4) ratingKitchen.mark4.count++;
          else if (el.ratingKitchen === 5) ratingKitchen.mark5.count++;
        }

        ratingKitchen.mark1.persent = (
          (ratingKitchen.mark1.count / ratingKitchen.sum) *
          100
        ).toFixed(1);
        ratingKitchen.mark2.persent = (
          (ratingKitchen.mark2.count / ratingKitchen.sum) *
          100
        ).toFixed(1);
        ratingKitchen.mark3.persent = (
          (ratingKitchen.mark3.count / ratingKitchen.sum) *
          100
        ).toFixed(1);
        ratingKitchen.mark4.persent = (
          (ratingKitchen.mark4.count / ratingKitchen.sum) *
          100
        ).toFixed(1);
        ratingKitchen.mark5.persent = (
          (ratingKitchen.mark5.count / ratingKitchen.sum) *
          100
        ).toFixed(1);

        let ratingCourier = {
          mark1: {
            count: 0,
            persent: 0,
          },
          mark2: {
            count: 0,
            persent: 0,
          },
          mark3: {
            count: 0,
            persent: 0,
          },
          mark4: {
            count: 0,
            persent: 0,
          },
          mark5: {
            count: 0,
            persent: 0,
          },
          sum: 0,
        };

        for (const el of item) {
          ratingCourier.sum++;
          if (el.ratingCourier === 1) ratingCourier.mark1.count++;
          else if (el.ratingCourier === 2) ratingCourier.mark2.count++;
          else if (el.ratingCourier === 3) ratingCourier.mark3.count++;
          else if (el.ratingCourier === 4) ratingCourier.mark4.count++;
          else if (el.ratingCourier === 5) ratingCourier.mark5.count++;
        }

        ratingCourier.mark1.persent = (
          (ratingCourier.mark1.count / ratingCourier.sum) *
          100
        ).toFixed(1);
        ratingCourier.mark2.persent = (
          (ratingCourier.mark2.count / ratingCourier.sum) *
          100
        ).toFixed(1);
        ratingCourier.mark3.persent = (
          (ratingCourier.mark3.count / ratingCourier.sum) *
          100
        ).toFixed(1);
        ratingCourier.mark4.persent = (
          (ratingCourier.mark4.count / ratingCourier.sum) *
          100
        ).toFixed(1);
        ratingCourier.mark5.persent = (
          (ratingCourier.mark5.count / ratingCourier.sum) *
          100
        ).toFixed(1);

        return { kitchen: item[0].kitchen, ratingKitchen, ratingCourier };
      });

      return calculatedResult;
    };

    const returnData = filteredMarks();
    return returnData;
  };

  const formOperators = () => {
    const arrayFilter = new Set();
    for (const obj of result) {
      arrayFilter.add(obj.operator);
    }
    const operators = Array.from(arrayFilter);

    const filteredMarks = () => {
      const filteredResult = operators.map((item, index) => {
        return result.filter((el) => {
          return el.operator === item;
        });
      });

      const calculatedResult = filteredResult.map((item, index) => {
        let ratingOperator = {
          mark1: {
            count: 0,
            persent: 0,
          },
          mark2: {
            count: 0,
            persent: 0,
          },
          mark3: {
            count: 0,
            persent: 0,
          },
          mark4: {
            count: 0,
            persent: 0,
          },
          mark5: {
            count: 0,
            persent: 0,
          },
          sum: 0,
        };

        for (const el of item) {
          ratingOperator.sum++;
          if (el.ratingOperator === 1) ratingOperator.mark1.count++;
          else if (el.ratingOperator === 2) ratingOperator.mark2.count++;
          else if (el.ratingOperator === 3) ratingOperator.mark3.count++;
          else if (el.ratingOperator === 4) ratingOperator.mark4.count++;
          else if (el.ratingOperator === 5) ratingOperator.mark5.count++;
        }

        ratingOperator.mark1.persent = (
          (ratingOperator.mark1.count / ratingOperator.sum) *
          100
        ).toFixed(1);
        ratingOperator.mark2.persent = (
          (ratingOperator.mark2.count / ratingOperator.sum) *
          100
        ).toFixed(1);
        ratingOperator.mark3.persent = (
          (ratingOperator.mark3.count / ratingOperator.sum) *
          100
        ).toFixed(1);
        ratingOperator.mark4.persent = (
          (ratingOperator.mark4.count / ratingOperator.sum) *
          100
        ).toFixed(1);
        ratingOperator.mark5.persent = (
          (ratingOperator.mark5.count / ratingOperator.sum) *
          100
        ).toFixed(1);

        return { operator: item[0].operator, ratingOperator };
      });

      return calculatedResult;
    };

    const returnData = filteredMarks();
    return returnData;
  };

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    operators: formOperators(),
    kitchens: formKitchens(),
  });
};
