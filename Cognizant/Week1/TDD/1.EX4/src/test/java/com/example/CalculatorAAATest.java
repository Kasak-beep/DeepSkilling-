package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorAAATest {

    private Calculator calculator;

    // SETUP METHOD
    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup: Calculator created");
    }

    // TEST USING AAA PATTERN
    @Test
    public void testAdditionUsingAAA() {
        // Arrange
        int a = 4;
        int b = 6;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(10, result);
    }

    // TEARDOWN METHOD
    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown: Calculator destroyed");
    }
}

