import React from 'react';

//styled.components
import { HomePageContainer } from './homepage.style';

//scss
import './homepage.style.scss';

//components
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
    
);

export default HomePage;