"use client"; // Add this to ensure the component is treated as a Client Component

import React, { useState } from "react";
import styled from "styled-components";
import Form from "@/app/components/Form";
import ProposalComponent from "@/app/components/JobProposalItem";
import { v4 as uuidv4 } from "uuid";

// Define the Proposal interface
interface Proposal {
  id: string;
  title: string;
  description: string;
  price: number;
}

const JobsPageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h1`
  font-size: 2.2rem;
  color: #007bff;
  text-decoration: underline;
  background-image: linear-gradient(to right, #007bff, #00c6ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
`;
const CreateButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const SectionContent = styled.div`
  margin-bottom: 20px;
`;

const ProposalList = styled.div`
  max-height: 400px; /* Adjust the max height as needed */
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const JobsPage: React.FC = () => {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [showForm, setShowForm] = useState(false); // State to manage form visibility

  // Function to add a new proposal
  const createProposal = (proposal: Proposal) => {
    setProposals([...proposals, proposal]);
    setShowForm(false); // Hide the form after creating a proposal
  };

  // Function to delete a proposal
  const deleteProposal = (id: string) => {
    setProposals(proposals.filter((proposal) => proposal.id !== id));
  };

  return (
    <JobsPageContainer>
      <SectionHeader>
        <SectionTitle>Proposal Section</SectionTitle>
        <CreateButton onClick={() => setShowForm(true)}>Create Proposal</CreateButton>
      </SectionHeader>
      <SectionContent>
        <SectionText>
          Welcome to the Proposal area. Here, you will discover listings of proposals and additional
          relevant details.
        </SectionText>
      </SectionContent>
      <ProposalList>
        {proposals.map((proposal) => (
          <ProposalComponent
            key={proposal.id}
            proposal={proposal}
            deleteProposal={deleteProposal}
          />
        ))}
        {showForm && <Form createProposal={createProposal} />} {/* Render Form conditionally */}
      </ProposalList>
    </JobsPageContainer>
  );
};

export default JobsPage;
