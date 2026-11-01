// Shared request validation helpers.
export const isNonEmptyString = (value) => typeof value === 'string' && value.trim().length > 0;
export const normalizeEmail = (value) => value.trim().toLowerCase();
export const isEmail = (value) => typeof value === 'string' && value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
// bcrypt only uses the first 72 bytes, so longer passwords are rejected instead of cut short.
export const isValidPassword = (value) => typeof value === 'string' && value.length >= 8 && Buffer.byteLength(value) <= 72;
const isName = (value) => isNonEmptyString(value) && value.trim().length <= 100;

// Returns { errors, value }. Only known fields are copied into value.
export function validateRegistration(body, { minSize, maxSize }) {
  const { email, password, team } = body ?? {};
  const errors = {};

  if (!isEmail(email)) errors.email = 'Enter a valid email address.';
  if (!isValidPassword(password)) errors.password = 'Password must be 8 to 72 characters.';
  if (!isName(team?.name)) errors.teamName = 'Enter a team name of up to 100 characters.';
  if (!isName(team?.leaderName)) errors.leaderName = "Enter the leader's name.";

  const others = team?.members ?? [];
  if (!Array.isArray(others) || others.some((member) => !isName(member?.name) || !isEmail(member?.email))) errors.members = 'Enter a name and valid email for each member.';
  if (Object.keys(errors).length) return { errors };

  // The leader always counts as a member, whether or not the form listed them.
  const leaderEmail = normalizeEmail(email);
  const leaderName = team.leaderName.trim();
  const listed = others.map((member) => ({ name: member.name.trim(), email: normalizeEmail(member.email) }));
  const members = listed.some((member) => member.email === leaderEmail) ? listed : [{ name: leaderName, email: leaderEmail }, ...listed];

  if (new Set(members.map((member) => member.email)).size !== members.length) errors.members = 'Each member needs a different email address.';
  else if (members.length < minSize || members.length > maxSize) errors.members = `Teams must have ${minSize} to ${maxSize} members, including the leader.`;

  return { errors, value: { email: leaderEmail, password, team: { name: team.name.trim(), leaderName, leaderEmail, members } } };
}
