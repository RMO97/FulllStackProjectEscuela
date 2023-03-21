namespace Escuela_API.Models
{
    public class Estudiante
    {
        public  Guid Id { get; set; }
        public string nombre { get; set; }
        public string apellido { get; set; }
        public int edad { get; set; }
        public string genero { get; set; }
    }
}
