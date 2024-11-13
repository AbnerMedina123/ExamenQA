describe('API de Estudiantes', () => {
  it('Debería crear un nuevo estudiante', () => {
    cy.request('POST', 'http://localhost:3000/api/estudiantes', {
      nombre: 'Ana Gómez',
      edad: 22,
      correo: 'ana.gomez@example.com',
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
    });
  });


});
