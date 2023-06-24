const app = require('../../app')
const request = require('supertest');

// homesetting test 
describe('testing homesetting api crud operations', function () {
  it('get homesittting  data', async () => {
    const resp = await request(app).get('/homesetting');
    expect(resp.statusCode).toBe(200);
  });
  it('insert homesetting api', async () => {
    const reqs = await request(app).post('/homesetting').send({
      Title: "haaaheyeyey",
      name: "BetaHouse",
      location: "huddur",
      logo: "LoogadaBooskeddddda",
      email: "gadaas@gmail.com",
      Complaint_Email: "dshdhg@gmail.com",
      Complaint_Phone: "6351653623",
      facebook: "hsdhsfhsdjkfs",
      tiktok: "gfhasgdfhags",
      twitter: "kasdjhfjkasg",
      instagram: "dhsfjkdhfj",
      HeroTitle: "sdakhgdkasd",
      HeroDescription: "dgfhsgfjsdhgf",
      heroImage: "asdfhasjkgfkjsag mesha",
      footerText: "asdkashdkjahdjhasjdhfaksnnkasjnhdnk",
      userId: "648e96a748d78f75de101a90"
    });
    expect(reqs.statusCode).toBe(201);
    userId = reqs.body.homeSettingPosting._id;
  });
  it('get homesetting by id', async () => {
    // let Id;
    const resp = await request(app).get(`/homesetting/${userId}`);
    expect(resp.statusCode).toBe(200);
  });
  it('update homesetting', async () => {
    const Update = await request(app).put(`/homesetting/${userId}`).send({
      Title: "haaaheyeyey",
      name: "BetaHouse",
      location: "huddur",
      logo: "Loogadaddda",
      email: "gaaliiaisi@gmail.com",
      Complaint_Email: "dshdhg@gmail.com",
      Complaint_Phone: "6351653623",
      facebook: "hsdhsfhsdjkfs",
      tiktok: "gfhasgdfhags",
      twitter: "kasdjhfjkasg",
      instagram: "dhsfjkdhfj",
      HeroTitle: "sdakhgdkasd",
      HeroDescription: "dgfhsgfjsdhgf",
      heroImage: "asdfhasjkgfkjsag mesha",
      footerText: "asdkashdkjahdjhasjdhfaksnnkasjnhdnk",
      userId: "648e96a748d78f75de101a90"
    });

    expect(Update.statusCode).toBe(200);
  });
});

// gallery test api calls
describe('testing gallery api calls crud operations', function () {
  it('get gallery data', async () => {
    const resp = await request(app).get('/gallery');
    expect(resp.statusCode).toBe(200);
  });
  // it('insert gallery api', async () => {
  //   const reqs = await request(app).post('/gallery').send({
  //     ImageTitle: 'logo ',
  //     Image:
  //       'https://images.unsplash.com/photo-1687093875330-180f8be8d8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
  //   });
  //   expect(reqs.statusCode).toBe(201);
  //   userId = reqs.body.galleryPosting._id;
  // });
  it('get gallery by id', async () => {
    const resp = await request(app).get(`/gallery/${userId}`);
    expect(resp.statusCode).toBe(200);
  });
  it('update gallery', async () => {
    const Update = await request(app).put(`/gallery/${userId}`).send({
      ImageTitle: "ahdjsgdjhagjh",
      Image: "sawirkahahshahsa"
    });

    expect(Update.statusCode).toBe(200);
  });
});






