// src/middleware/validationMiddleware.js
import { body, validationResult } from 'express-validator';

// Middleware to validate request data
const validateRequest = (validations) => {
    return async (req, res, next) => {
        await Promise.all(validations.map((validation) => validation.run(req)));

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    };
};

// Validation rules for user registration
const validateUserRegistration = [
    body('username')
        .trim()
        .notEmpty()
        .withMessage('Username is required')
        .isLength({ min: 3 })
        .withMessage('Username must be at least 3 characters long'),
    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Invalid email address'),
    body('password')
        .trim()
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
];

// Validation rules for login
const validateUserLogin = [
    body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email address'),
    body('password').trim().notEmpty().withMessage('Password is required'),
];

// Validation rules for event creation
const validateEventCreation = [
    body('title').trim().notEmpty().withMessage('Event title is required'),
    body('description').trim().notEmpty().withMessage('Event description is required'),
    body('date')
        .trim()
        .notEmpty()
        .withMessage('Event date is required')
        .isISO8601()
        .withMessage('Invalid date format'),
    body('time').trim().notEmpty().withMessage('Event time is required'),
    body('link').trim().optional().isURL().withMessage('Invalid event link'),
];

// Validation rules for availability settings
const validateAvailability = [
    body('startTime').trim().notEmpty().withMessage('Start time is required'),
    body('endTime').trim().notEmpty().withMessage('End time is required'),
];

export {
    validateRequest,
    validateUserRegistration,
    validateUserLogin,
    validateEventCreation,
    validateAvailability,
};
