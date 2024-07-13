import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

interface Proposal {
  id: string;
  title: string;
  description: string;
  price: number;
}

interface ProposalProps {
  proposal: Proposal;
  deleteProposal: (id: string) => void;
}

const ProposalContainer = styled.div`
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ProposalTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 1px;
`;

const ProposalDescription = styled.p`
  font-size: 1rem;
  color: #333333;
`;

const ProposalPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #007bff;
`;

const DeleteButton = styled.button`
  padding: 4px 12px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;

const ProposalComponent: React.FC<ProposalProps> = ({ proposal, deleteProposal }) => {
  return (
    <ProposalContainer>
      <ProposalTitle>{proposal.title}</ProposalTitle>
      <ProposalDescription>{proposal.description}</ProposalDescription>
      <ProposalPrice>Price: ${proposal.price}</ProposalPrice>
      <DeleteButton onClick={() => deleteProposal(proposal.id)}>Delete Proposal</DeleteButton>
    </ProposalContainer>
  );
};

export default ProposalComponent;
