const express = require('express');

const UsersController = require('./controllers/UsersController');
const TicketsController = require('./controllers/TicketsController');
const MessagesController = require('./controllers/MessagesController');

const routes = express.Router();
const usersControllers = new UsersController();
const ticketsControllers = new TicketsController();
const messagesController = new MessagesController();

// Ações do usuário
routes.post('/users', usersControllers.create);                     // Criar usuário
routes.post('/tickets/:id', ticketsControllers.create);             // Criar ticket
routes.get('/tickets/:id', ticketsControllers.show);                // Mostrar tickets do usuário
routes.post('/ticket/:id', messagesController.sendMsgUser);         // Mandar mensagem

// Ações do admin
routes.get('/tickets', ticketsControllers.index);                   // Mostrar Todos os tickets
routes.post('/ticket/:id/admin', messagesController.sendMsgAdmin);  // Mandar mensagem

// Ação Global
routes.get('/talk/:id', messagesController.show);                   // Mostra a conversa do ticket

module.exports = routes;