import React from 'react';
import {render} from "@testing-library/react";

import Modal from '../src/components/Modal/Modal';

describe("Modal", () => {
    test("renders the Modal component", () => {
        render(<Modal onClose={() => {}} isOpen>This is a test content</Modal>);
    });
})