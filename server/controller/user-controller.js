import bcrypt from "bcrypt";
import User from "../model/user.js";

export const signupUser = async (request, response) => {
  try {
    // const salt = await bcrypt.genSalt();
    const hashedpassword = await bcrypt.hash(request.body.password, 10);
    const user = {
      username: request.body.username,
      name: request.body.name,
      password: hashedpassword,
    };
    const newUser = new User(user);
    await newUser.save();
    return response.status(200).json({ msg: "signup successfull" });
  } catch (error) {
    return response.status(500).json({ msg: "error while sighup the user" });
  }
};
