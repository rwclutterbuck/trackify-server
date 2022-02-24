docker compose -f docker-compose.yml -f docker-compose.test.yml up -d
docker exec -it demo_test_api sh -c "npm install && npm test"
