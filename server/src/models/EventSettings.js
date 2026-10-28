import mongoose from 'mongoose';
const eventSettingsSchema = new mongoose.Schema({ _id: { type: String, default: 'current' }, milestones: { registrationOpensAt: Date, registrationClosesAt: Date, buildingStartsAt: Date, submissionOpensAt: Date, submissionClosesAt: Date, resultsAt: Date }, registrationMode: { type: String, enum: ['auto', 'force_open', 'force_closed'], default: 'auto' }, submissionMode: { type: String, enum: ['auto', 'force_open', 'force_closed'], default: 'auto' } }, { timestamps: true });
export default mongoose.model('EventSettings', eventSettingsSchema);
