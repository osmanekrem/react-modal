
import Modal from '../components/Modal/Modal';
import React from 'react';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modal',
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export function BasicUsage()  {
  const [isOpen, setIsOpen] = React.useState(false)
    return (
      <>
        <button onClick={() => setIsOpen(prev => !prev)}>Click Me</button>
        <Modal 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)}
        >
          Modal
        </Modal>
      </>
    )
};
