import React from 'react';
import {useNavigate} from 'react-router-dom';
// import BackBtn from '../../../assets/images/backBtn.svg';
import LockIcon from '@mui/icons-material/Lock';
// import styles from './Submission.module.css';

export default function Submission(props) {
    let navigate = useNavigate();
     function RouteChangebackhome() {
        navigate('/')

    
}
    return(
        <div className={styles.SubmissionCon}>
            <div onClick={RouteChangebackhome}>
            <img alt="back"  src={BackBtn} />
            </div>
 
            <div className={styles.ConBtn} onClick={props.handleOpen}>
                <LockIcon className={styles.LockIcon} /> 
                <p>{props.children}</p>
            </div>
        </div>
    );
}