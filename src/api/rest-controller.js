function getAllUsers (req, res) {
  res.json({ message: 'all users '});
}

function getUser (req, res) {
  res.json({ message: 'one user'});
}

function getAllUserComments (req, res) {
  res.json({ message: 'all users comments'});
}

function getCommentForUser (req, res) {
  res.json({ message: 'an specific message for a specific user'});
}

module.exports = {
  getAllUsers,
  getUser,
  getAllUserComments,
  getCommentForUser
};