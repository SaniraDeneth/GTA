import mongoose from 'mongoose';
const submissionSchema = new mongoose.Schema({ teamId: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true, unique: true }, title: { type: String, required: true, trim: true }, description: { type: String, required: true, trim: true }, repoUrl: { type: String, required: true, trim: true }, playableUrl: { type: String, trim: true }, videoUrl: { type: String, trim: true }, submittedAt: Date }, { timestamps: true });
export default mongoose.model('Submission', submissionSchema);
