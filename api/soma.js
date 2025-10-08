module.exports = (req, res) => {
  const { a, b } = req.query;
  const soma = Number(a) + Number(b);
  res.status(200).json({ resultado: soma });
};
