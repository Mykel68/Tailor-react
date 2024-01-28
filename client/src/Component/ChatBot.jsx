import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { Button, Icon, Container } from 'semantic-ui-react';
import bot from '../assets/image/icon/pngegg.png'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChatToggle = () => {
    setIsOpen(!isOpen);
  };

  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our website",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please enter your name",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select your issue",
      trigger: "Issues",
    },
    {
      id: "Issues",
      options: [
        { value: "React", label: "React", trigger: "React" },
        { value: "Angular", label: "Angular", trigger: "Angular" },
      ],
    },
    {
      id: "React",
      message: "Thanks for telling your react issues ",
      end: true,
    },
    {
      id: "Angular",
      message: "Thanks for telling your angular issue",
      end: true,
    },
  ];

  return (
    <Container 
    className='d-none d-sm-block'
      style={{
        position: 'fixed',
        bottom: '10px',
        right: '30px',
        zIndex: 1000,
        width: "auto",
        filter: "saturate(100%) brightness(100%) hue-rotate(95deg)",
        
      }}
    >
      <Button
        icon
        labelPosition="left"
        onClick={handleChatToggle}
        className="btn p-2 pe-4 bg-success border-0 btn-danger "
        
      >
        <Icon name="chat"  />

        {isOpen ? "Close Sophia" : "Meet Sophia"}

      
      </Button>

      {isOpen && (
        <ChatBot
          steps={steps}
          opened={isOpen}
          toggleFloating={handleChatToggle}
          botAvatar={bot} // Add your bot avatar URL
          headerTitle={'Welcome'} // Add a header title for the chatbot
          recognitionEnable={false} // Enable voice recognition if needed
          floating={true}
        
        />
      )}
    </Container>
  );
};

export default Chatbot;
