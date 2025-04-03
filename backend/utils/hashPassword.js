import bcrypt from 'bcryptjs';

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10); // Generate salt with cost factor 10
    const hashedPassword = await bcrypt.hash(password, salt); // Hash password using salt
    return hashedPassword;
};

export default hashPassword;
