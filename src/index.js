import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./.env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 9000, () => {
      console.log(`the sever is connected to the port: ${process.env.PORT}`);
    });
    app.on(
      ("error",
      (err) => {
        console.log("error", err);
      })
    );
  })
  .catch((err) => {
    console.log("the mongodb connection is failed", err);
  });

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("error:", error);
//       throw error;
//     });
//     app.listen(process.env.PORT,()=>{
//         console.log(`app is listening on port: ${process.env.PORT}`)
//     });
//   } catch (error) {
//     console.error("ERROR:", error);
//     throw error;
//   }
// })();
