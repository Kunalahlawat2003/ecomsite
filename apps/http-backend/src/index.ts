import express from "express"
import { userRouter } from "./(user)/route";
import { productRouter } from "./(product)/route";
import { adminRouter } from "./(admin)/route";
import { reviewRouter } from "./(reviews)/route";
import { orderRouter } from "./(order)/route";

const app = express();

app.use(express.json())

app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/order", orderRouter);

app.listen(3001);

export default app