import { sendMailFunc } from "../lib/sendMail.js";

export const send = async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    await sendMailFunc(to, subject, text);

    res.json("mail sent");
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ message: error.message });
  }
};
