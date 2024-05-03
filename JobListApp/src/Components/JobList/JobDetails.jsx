import React from 'react';
import { Typography, Container, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';


const JobDetails = () => {

  const { jdList } = useSelector((state) => state.SearchItems.payloadData)
  const navigate = useNavigate()
  const { id } = useParams()

  console.log('id', id)

  console.log('reduxstorejobs', jdList)

  const handleCLick = () => {
    navigate('/')
  }

  const getCompanyDetails = jdList?.filter((job) => {
    return (
      job.jdUid === id
    )
  })

  console.log('getCompanyDetails', getCompanyDetails)
//added dummy data which is not available in api
 return (
    <Container>
      <Typography variant="h3" gutterBottom onClick={handleCLick} style={{cursor:'pointer'}} >
        <img style={{ width: '10rem', height: "5rem" }} src={getCompanyDetails[0].logoUrl} alt='logo' />
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Overview
          </Typography>
          <Typography>
            Company name: {getCompanyDetails[0].companyName} | HQ Location: {getCompanyDetails[0].location}
          </Typography>
          <Typography>
            Role: {getCompanyDetails[0].jobRole.toUpperCase()}
          </Typography>
          <Typography>
            Salary: ${getCompanyDetails[0].minJdSalary ? `${getCompanyDetails[0].minJdSalary}-${getCompanyDetails[0].maxJdSalary}` : getCompanyDetails[0].maxJdSalary}
          </Typography>
          <Typography>
            Experience:  {getCompanyDetails[0].minExp ? `${getCompanyDetails[0].minExp}-${getCompanyDetails[0].maxExp}` : getCompanyDetails[0].maxExp} years
          </Typography>
          <Typography>
            Location: {getCompanyDetails[0].location}
          </Typography>
          <Typography>
            Type: Full-time
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" >
            About the company
          </Typography>
          <Typography>
            We are on a mission to help 30 million+ D2C brands and SMBs with automated sales and user acquisition on WhatsApp in India. In the first half of 2021, Businessonbot has grown 145% M-o-M in MRR and targets a massive wave of D2C businesses in India.
          </Typography>
        </Grid>
      </Grid>
      <br />
      <Typography variant="h6" gutterBottom>
        About the role
      </Typography>
      <Typography>
        {getCompanyDetails[0].jobDetailsFromCompany}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Responsibilities
      </Typography>
      <ul>
        <li>Work on the core platform architecture.</li>
        <li>Write testable and scalable code while applying industry standards during the development process to ensure high quality.</li>
        <li>Ensure execution of deliverables according to time/cost estimation.</li>
        <li>Provide improvements on UI/UX.</li>
        <li>Seek feedback from end clients/users.</li>
        <li>Manage security, external authentication, third-party security, and API authentication.</li>
        <li>Execute bug fixes for production, security vulnerabilities fixes, deployments in production, production outage analysis, and fixing.</li>
      </ul>
    </Container>
  );
};

export default JobDetails;
