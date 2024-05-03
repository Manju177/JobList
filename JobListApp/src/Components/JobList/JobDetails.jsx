// JobDetails.js
import React from 'react';
import { Typography, Container, Grid } from '@material-ui/core';

const JobDetails = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        BusinessOnBot
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Overview
          </Typography>
          <Typography>
            Company name: BusinessOnBot | HQ Location: Bangalore, Karnataka | Website | LinkedIn
          </Typography>
          <Typography>
            Role: Fullstack Engineer
          </Typography>
          <Typography>
            Salary: Rs.15-20 lakhs per annum
          </Typography>
          <Typography>
            Experience: 1-3 years
          </Typography>
          <Typography>
            Location: Bangalore
          </Typography>
          <Typography>
            Type: Full-time
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            About the role
          </Typography>
          <Typography>
            Fullstack Engineer works closely with the founders and tech lead to drive the vision and plans, building a lovable technology first product that customers want.
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
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom>
        About the company
      </Typography>
      <Typography>
        We are on a mission to help 30 million+ D2C brands and SMBs with automated sales and user acquisition on WhatsApp in India. In the first half of 2021, Businessonbot has grown 145% M-o-M in MRR and targets a massive wave of D2C businesses in India.
      </Typography>
    </Container>
  );
};

export default JobDetails;
