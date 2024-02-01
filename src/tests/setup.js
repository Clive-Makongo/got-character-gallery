import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/types/';

expect.extend(matchers);

afterEach(() => {
    cleanup();
 });