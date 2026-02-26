// src/services/userService.ts
import { apiFetch } from './api';

export interface User {
  id?: number;
  userName: string;
  email: string;
}

export const userService = {
  getAll: () => apiFetch<User[]>('/Usuarios'),
  getById: (id: number) => apiFetch<User>(`/Usuarios/${id}`),
  create: (userData: User) => apiFetch<User>('/Usuarios', {
    method: 'POST',
    body: JSON.stringify(userData)
  })
};