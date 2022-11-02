# BF Component Modal

This module has been created for project 14 of DAJR OpenClassroom formation

## Installation

```bash
npm install bf-component-modal --save
```

### How to use

```js
import React, { useState } from 'react';
import { Modal } from 'bf-component-modal';

function myComponent() {
    const [showModal, setShowModal] = useState(false);
    return (
        <Modal
            title={"My modal header title"}
            description={"My modal body content"}
            show={showModal} // Boolean used to show or not the modal
            onClose={(event) => setShowModal(false)} // Action when modal closing
        />
    );
}

export default myComponent;

```