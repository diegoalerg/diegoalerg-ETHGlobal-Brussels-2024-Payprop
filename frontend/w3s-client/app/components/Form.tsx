import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

// Define the interface for the proposal
interface Proposal {
  id: string;
  title: string;
  description: string;
  price: number;
}

// Define the interface for the props
interface FormProps {
  createProposal: (proposal: Proposal) => void;
}

const FormContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 0.1rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 0px;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 2px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 5px;
  font-size: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 5px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButton = styled.button`
  padding: 6px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
`;

const Form: React.FC<FormProps> = ({ createProposal }) => {
  // Create Proposal State
  const [proposal, updateProposal] = useState<Proposal>({
    id: "",
    title: "",
    description: "",
    price: 0,
  });

  // Create state to show the error
  const [error, updateError] = useState(false);

  // Function that executes every time an input is changed
  const updateState = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateProposal({
      ...proposal,
      [e.target.name]: e.target.value,
    });
  };

  // Extracting values
  const { id, title, description, price } = proposal;

  // When the user is adding a proposal
  const submitProposal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim() === "" || description.trim() === "" || price.toString().trim() === "") {
      updateError(true);
      return;
    }

    // Delete the previous message
    updateError(false);

    // Assign an ID
    proposal.id = uuidv4();
    //    const newProposal: Proposal = {
    //     id: uuidv4(),
    //     title,
    //     description,
    //     price,
    //   };

    // Create the proposal
    createProposal(proposal);

    // Restart the form
    updateProposal({
      id: "",
      title: "",
      description: "",
      price: 0,
    });
  };

  return (
    <FormContainer>
      <FormTitle>Create Proposal</FormTitle>

      {error && <ErrorMessage>All the fields are mandatory</ErrorMessage>}

      <form onSubmit={submitProposal}>
        <FormGroup>
          <FormLabel>Title</FormLabel>
          <FormInput
            type="text"
            name="title"
            placeholder="Proposal Title"
            onChange={updateState}
            value={title}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Description & Wallet </FormLabel>
          <FormTextarea
            name="description"
            placeholder="Proposal Description"
            onChange={updateState}
            value={description}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Price</FormLabel>
          <FormInput
            type="number"
            name="price"
            placeholder="Proposal Price"
            onChange={updateState}
            value={price}
          />
        </FormGroup>

        <FormButton type="submit">Create Proposal</FormButton>
      </form>
    </FormContainer>
  );
  {
    /*<Fragment>
    <h2>Create Proposal</h2>

    {error ? <p className="alerta-error">All the fields are mandatory</p> : null}

    <form onSubmit={submitProposal}>
      <label>Title</label>
      <input
        type="text"
        name="title"
        placeholder="Proposal Title"
        onChange={updateState}
        value={title}
      />

      <label>Description</label>
      <textarea
        name="description"
        placeholder="Proposal Description"
        onChange={updateState}
        value={description}
      ></textarea>
      <label>Price</label>
      <input
        type="number"
        name="price"
        placeholder="Proposal Price"
        onChange={updateState}
        value={price}
      />

      <button type="submit">Create Proposal</button>
    </form>
  </Fragment> */
  }
};

export default Form;
