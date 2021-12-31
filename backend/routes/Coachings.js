const router = require('express').Router();
let Coaching = require('../models/projects.model');



router.route('/').get((req, res) => {
    Coaching.find({projectselect: 'Coaching Project'})
    .then(coachings => res.json(coachings))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res) => {
    Coaching.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Hatali: ' + err));
});


//react componenttan axios ile bilgi bu adrese geldi
//models dosyasindan user mongoo modelide buraya import edildi geldi yukaridan 
//simdi ilgili modele donusturulerek server js e gonderildi oradan da mongo atlasa gonderildi.
router.route('/add').post((req, res) => {
  const projectname = req.body.projectname;
  const projectdesc= req.body.projectdesc;
  const projectselect= req.body.projectselect;
  const projectimage=req.body.projectimage;
  
  const newUser = new Coaching({projectname,projectdesc,projectselect,projectimage});

  newUser.save()
    .then(() => res.json('Coaching Project added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;