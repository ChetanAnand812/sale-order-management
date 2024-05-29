import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Box, Button, Input, VStack } from '@chakra-ui/react';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    login(username, password);
  };

  return (
    <VStack spacing={4} align="center">
      <Box>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Box>
      <Box>
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Button onClick={handleSubmit}>Login</Button>
    </VStack>
  );
};

export default LoginPage;
