class Movil:
    def __init__(self, clave_primaria, patente, detalles, precinto):
        self.clave_primaria = clave_primaria
        self.detalles = detalles
        self.patente = patente
        self.precinto = precinto

    def __str__(self):
        return f"Clave primaria: {self.clave_primaria}\nPatente: {self.patente}\nDetalles: {self.detalles}\nPrecinto: {self.precinto}"


class PlanillaMoviles:
    def __init__(self):
        self.moviles = []

    def agregar_movil(self, clave_primaria, patente, detalles, precinto):
        movil = Movil(clave_primaria, patente, detalles, precinto)
        self.moviles.append(movil)

    def ordenar_por_precintos(self):
        self.moviles.sort(key=lambda movil: movil.clave_primaria)

    def mostrar_moviles(self):
        for movil in self.moviles:
            print(movil)


# Ejemplo de uso
planilla = PlanillaMoviles()

planilla.agregar_movil("auto", "ABC123", "Detalles del auto", "c1")
planilla.agregar_movil("auto", "ABC1", "chofer juan", "c10")
planilla.agregar_movil("moto", "DEF456", "Detalles de la moto", "c2")
planilla.agregar_movil("camioneta", "GHI789", "Detalles de la camioneta", "c3")
planilla.agregar_movil("camion", "JKL012", "Detalles del camión", "c4")

print("Moviles sin ordenar:")
planilla.mostrar_moviles()

print("\nMoviles ordenados por precintos:")
planilla.ordenar_por_precintos()
planilla.mostrar_moviles()
