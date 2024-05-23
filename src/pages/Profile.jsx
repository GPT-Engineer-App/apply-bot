import { useState } from "react";
import { Box, Container, VStack, Input, Button, Text, Flex, Link, Spacer } from "@chakra-ui/react";
import { FaHome, FaBriefcase, FaUser, FaCog, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Profile = () => {
  const [resume, setResume] = useState(null);

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    setResume(file);
    // Logic to upload the resume to the backend will be added here
  };

  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" padding="1rem" justifyContent="space-between" alignItems="center">
        <HStack spacing={8}>
          <Link href="/" fontSize="xl" fontWeight="bold">JobApply</Link>
          <HStack spacing={4}>
            <Link href="/"><FaHome /> Home</Link>
            <Link href="/profile"><FaUser /> Profile</Link>
            <Link href="#"><FaBriefcase /> Jobs</Link>
            <Link href="#"><FaCog /> Settings</Link>
          </HStack>
        </HStack>
      </Flex>

      {/* Main Section */}
      <Container maxW="container.lg" mt={10}>
        <VStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">Upload Your Resume</Text>
          <Input type="file" accept=".pdf,.doc,.docx" onChange={handleResumeUpload} />
          {resume && <Text mt={2}>Uploaded: {resume.name}</Text>}
          <Button colorScheme="blue" size="lg" onClick={() => alert('Resume uploaded successfully!')}>Upload</Button>
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

export default Profile;