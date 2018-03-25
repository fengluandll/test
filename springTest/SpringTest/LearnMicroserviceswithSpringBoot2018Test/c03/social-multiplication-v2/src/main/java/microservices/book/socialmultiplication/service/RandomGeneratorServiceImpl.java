package microservices.book.socialmultiplication.service;

import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class RandomGeneratorServiceImpl implements RandomGeneratorService {

    private Random random = new Random(System.currentTimeMillis());

    @Override
    public int generateRandomFactor() {
        return random.nextInt(89) + 11;
    }
}
