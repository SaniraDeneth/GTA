import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({ email: { type: String, required: true, unique: true, lowercase: true, trim: true }, passwordHash: { type: String, required: true }, role: { type: String, enum: ['team', 'admin'], required: true, default: 'team' }, teamId: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', default: null } }, { timestamps: true });
export default mongoose.model('User', userSchema);
