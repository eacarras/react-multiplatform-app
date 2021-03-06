import React from 'react';
import HeadsetIcon from '@material-ui/icons/Headset';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import DrawOption from './components/drawOption';
import CarouselOptions from './components/carouselOptions';

import './home.css';

const Home = () => {
  const options = ['Wearables', 'Profile', 'Help'];
  const items = ['Red Gem', 'Blue Gem', 'Yellow Gem'];

  return (
    <aside className="home-container">
      <section className="home-container__drawer">
        <div className="home-container__drawer_user">
          <AccountCircleIcon style={{ fontSize: 80 }}></AccountCircleIcon>
          <div>
            <span>Name: User Test</span>
            <span>Email: user@test.com</span>
            <span>Phone: +58 98 983 1001</span>
          </div>
        </div>
        {
          options.map(optionName => {
            return (
              <DrawOption Icon={HeadsetIcon} text={optionName}></DrawOption>
            );
          })
        }
      </section>
      <section className="--intern-padding">
        <CarouselOptions items={items}></CarouselOptions>
      </section>
    </aside>
  );
}

export default Home;
