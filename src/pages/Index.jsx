import { Box, Container, VStack, HStack, Input, Button, Text, Flex, Link, Spacer } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import { fetchJobListings } from '../backend/jobApplicationHandler';
import { FaHome, FaBriefcase, FaUser, FaCog, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const jobs = await fetchJobListings('software engineer');
      setJobListings(jobs);
    };
    fetchJobs();
  }, []);

  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" padding="1rem" justifyContent="space-between" alignItems="center">
        <HStack spacing={8}>
          <Link href="#" fontSize="xl" fontWeight="bold">JobApply</Link>
          <HStack spacing={4}>
            <Link href="/"><FaHome /> Home</Link>
            <Link href="#"><FaBriefcase /> Jobs</Link>
            <Link href="/profile"><FaUser /> Profile</Link> {/* Update Profile link */}
            <Link href="#"><FaCog /> Settings</Link>
          </HStack>
        </HStack>
      </Flex>

      {/* Main Section */}
      <Container maxW="container.lg" mt={10}>
        <VStack spacing={4}>
          <Input placeholder="Search for jobs..." size="lg" />
          <Button colorScheme="blue" size="lg">Search</Button>
        </VStack>

        {/* Job Listings */}
        <VStack spacing={4} mt={10} align="stretch">
          {jobListings.map((job, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px">
              <Text fontWeight="bold" fontSize="xl">{job.title}</Text>
              <Text mt={2}>{job.company} - {job.location}</Text>
              <Button colorScheme="blue" mt={4}>Apply</Button>
            </Box>
          ))}
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.700" color="white" py={10} mt={10}>
        <Container maxW="container.lg">
          <Flex justifyContent="space-between" alignItems="center">
            <Text>&copy; 2023 JobApply. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="#"><FaFacebook /></Link>
              <Link href="#"><FaTwitter /></Link>
              <Link href="#"><FaLinkedin /></Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;