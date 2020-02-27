const home = {
  indexPage: (req, res) => res.status(200).json({ message: 'Index page' }),
  aboutPage: (req, res) => res.status(200).json({ message: 'About page' })
};

export default home;
