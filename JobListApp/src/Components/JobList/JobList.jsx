import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginBottom: '20px',
        flex: '1 1 calc(33.33% - 20px)',
        [theme.breakpoints.down('sm')]: {
            flex: '1 1 100%', // Display one card per row on small screens
        },
        borderRadius: '15px'
    },
    alignMent: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px',
    },
    BtnStyle: {
        width: '100%',
        backgroundColor: '#8a96ed'
    },
    mask: {
        maskImage: 'linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))',
        height: '250px',
        overflow: 'hidden'
    },
    viewJob: {
        textAlign: 'center',
        marginBottom: '0.5rem',
        position: 'relative',
        top: '-20px'
    },
    loader: {
        width: "3rem",
        height: '3rem',
        margin: 'auto',
        display: 'flex'
    }
}));

export default function JobList() {
    const classes = useStyles();
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false)

    //Api call
    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true)
            try {
                const myHeaders = new Headers();
                myHeaders.append('Content-Type', 'application/json');

                const raw = JSON.stringify({
                    limit: 99,
                    offset: 0,
                });

                const requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow',
                };

                const response = await fetch(
                    'https://api.weekday.technology/adhoc/getSampleJdJSON',
                    requestOptions
                );
                const result = await response.json();
                console.log('result', result);
                setJobs(result.jdList);
                setLoading(false) 
            } catch (error) {
                console.error(error);
                setLoading(false)
            }
        };

        fetchJobs();
    }, []);



    console.log('jobs', jobs)

    return (
        <> 
        {/* loader untill api call completes */}
            {loading && <AiOutlineLoading3Quarters className={classes.loader} />}
            <div className={classes.alignMent}>
                {jobs.map((job, index) => (
                    <Card key={index} className={classes.root}>
                        <CardHeader
                            title={job.jobRole.toUpperCase()}
                            subheader={`Location: ${job.location}`}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <strong>Minimum Experience:</strong> {job.minExp} years
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <strong>Job Link:</strong>{' '}
                                <a
                                    href={job.jdLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {job.jdLink}
                                </a>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <strong>Estimated Salary:</strong> ${job.minJdSalary ? `${job.minJdSalary}-${job.maxJdSalary}` : job.maxJdSalary}
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography paragraph><b>About Company:</b></Typography>
                            <Typography paragraph className={classes.mask}>
                                {job.jobDetailsFromCompany}
                            </Typography>
                            <div className={classes.viewJob}>
                                <a href="https://jobs.weekday.works/ema-software-productivity-engineer-e900?candidateId=U2FsdGVkX19Bil43L5EIhohpLlOB4FVy9eD/JqewmSJzEYIssZXHJIYUTakOyM38tX6CI7NE4R6tVgiYK13+Fw==">View job</a>
                            </div>
                            <Button className={classes.BtnStyle} variant="contained">Easy Apply</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
}
