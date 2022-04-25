ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts

# Generate SSH key for GitHub
ssh-keygen -t ed25519 -C "your_email@example.com"
** Add key to local mashine **
ssh-add ~/.ssh/id_ed25519