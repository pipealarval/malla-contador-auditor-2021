const mallaData = [
  {
    "anio": "Año 1",
    "semestres": [
      {
        "nombre": "Semestre 1",
        "ramos": [
          {
            "nombre": "Fundamento de la empresa",
            "requisitos": []
          },
          {
            "nombre": "Metodología de la investigación",
            "requisitos": []
          },
          {
            "nombre": "Habilidades comunicacionales",
            "requisitos": []
          },
          {
            "nombre": "Matemática aplicada 1",
            "requisitos": []
          },
          {
            "nombre": "Introducción al medio y la ética profesional",
            "requisitos": []
          },
          {
            "nombre": "Derecho 1",
            "requisitos": []
          }
        ]
      }
    ]
  },
  {
    "anio": "Año 1",
    "semestres": [
      {
        "nombre": "Semestre 2",
        "ramos": [
          {
            "nombre": "Administración",
            "requisitos": [
              "Fundamento de la empresa"
            ]
          },
          {
            "nombre": "Contabilidad 1",
            "requisitos": [
              "Fundamento de la empresa"
            ]
          },
          {
            "nombre": "Derecho 2",
            "requisitos": [
              "Introducción al derecho"
            ]
          },
          {
            "nombre": "Tecnología de la información",
            "requisitos": [
              "Matemática aplicada 1"
            ]
          },
          {
            "nombre": "Matemática aplicada 2",
            "requisitos": [
              "Matemática aplicada 1"
            ]
          }
        ]
      }
    ]
  },
  {
    "anio": "Año 2",
    "semestres": [
      {
        "nombre": "Semestre 1",
        "ramos": [
          {
            "nombre": "Gestión de personas",
            "requisitos": [
              "Administración"
            ]
          },
          {
            "nombre": "Contabilidad 2",
            "requisitos": [
              "Fundamento de la empresa",
              "Contabilidad 1"
            ]
          },
          {
            "nombre": "Tributación 1",
            "requisitos": [
              "Derecho 2"
            ]
          },
          {
            "nombre": "Sistema de información administrativa",
            "requisitos": [
              "Tecnología de la información"
            ]
          },
          {
            "nombre": "Introducción a la economía",
            "requisitos": [
              "Matemática aplicada 2"
            ]
          },
          {
            "nombre": "Matemática aplicada 3",
            "requisitos": [
              "Matemática aplicada 1",
              "Matemática aplicada 2"
            ]
          }
        ]
      }
    ]
  },
  {
    "anio": "Año 2",
    "semestres": [
      {
        "nombre": "Semestre 2",
        "ramos": [
          {
            "nombre": "Comercialización",
            "requisitos": [
              "Gestión de personas",
              "Administración"
            ]
          },
          {
            "nombre": "Contabilidad 3",
            "requisitos": [
              "Fundamento de la empresa",
              "Contabilidad 1",
              "Contabilidad 2"
            ]
          },
          {
            "nombre": "Economía 1",
            "requisitos": [
              "Matemática aplicada 1",
              "Matemática aplicada 2"
            ]
          },
          {
            "nombre": "Gestión de análisis de datos",
            "requisitos": [
              "Matemática aplicada 1",
              "Sistema de información administrativa"
            ]
          },
          {
            "nombre": "Estadística",
            "requisitos": [
              "Matemática aplicada 1",
              "Matemática aplicada 2",
              "Matemática aplicada 3"
            ]
          },
          {
            "nombre": "Tributación 2",
            "requisitos": [
              "Derecho 1",
              "Derecho 2",
              "Tributación 1"
            ]
          }
        ]
      }
    ]
  },
  {
    "anio": "Año 3",
    "semestres": [
      {
        "nombre": "Semestre 1",
        "ramos": [
          {
            "nombre": "Auditoría 1",
            "requisitos": [
              "Contabilidad 3"
            ]
          },
          {
            "nombre": "Contabilidad 4",
            "requisitos": [
              "Contabilidad 2",
              "Contabilidad 3"
            ]
          },
          {
            "nombre": "Economía 2",
            "requisitos": [
              "Economía 1"
            ]
          },
          {
            "nombre": "Gestión financiera",
            "requisitos": [
              "Contabilidad 3"
            ]
          },
          {
            "nombre": "Control interno",
            "requisitos": [
              "Contabilidad 3",
              "Tecnología de la información"
            ]
          },
          {
            "nombre": "Gestión de procesos y operaciones",
            "requisitos": [
              "Comercialización",
              "Gestión de personas"
            ]
          }
        ]
      }
    ]
  },
  {
    "anio": "Año 3",
    "semestres": [
      {
        "nombre": "Semestre 2",
        "ramos": [
          {
            "nombre": "Auditoría 2",
            "requisitos": [
              "Auditoría 1",
              "Contabilidad 3",
              "Contabilidad 4",
              "Tributación 2"
            ]
          },
          {
            "nombre": "Costos 1",
            "requisitos": [
              "Contabilidad 3"
            ]
          },
          {
            "nombre": "Contabilidad aplicada",
            "requisitos": [
              "Contabilidad 3",
              "Contabilidad 4"
            ]
          },
          {
            "nombre": "Taller tributario",
            "requisitos": [
              "Tributación 2"
            ]
          },
          {
            "nombre": "Finanzas 1",
            "requisitos": [
              "Gestión financiera"
            ]
          },
          {
            "nombre": "Gestión de personas y responsabilidad social",
            "requisitos": [
              "Gestión de personas"
            ]
          }
        ]
      }
    ]
  },
  {
    "anio": "Año 4",
    "semestres": [
      {
        "nombre": "Semestre 1",
        "ramos": [
          {
            "nombre": "Auditoría 3",
            "requisitos": [
              "Auditoría 1",
              "Auditoría 2"
            ]
          },
          {
            "nombre": "Control de gestión",
            "requisitos": [
              "Contabilidad aplicada",
              "Control interno"
            ]
          },
          {
            "nombre": "Costos 2",
            "requisitos": [
              "Costos 1",
              "Contabilidad aplicada"
            ]
          },
          {
            "nombre": "Electivo 1",
            "requisitos": []
          },
          {
            "nombre": "Finanzas 2",
            "requisitos": [
              "Finanzas 1"
            ]
          },
          {
            "nombre": "Gestión pública",
            "requisitos": [
              "Gestión de procesos y operaciones"
            ]
          }
        ]
      }
    ]
  },
  {
    "anio": "Año 4",
    "semestres": [
      {
        "nombre": "Semestre 2",
        "ramos": [
          {
            "nombre": "Auditoría informática",
            "requisitos": [
              "Auditoría 2",
              "Gestión de análisis de datos"
            ]
          },
          {
            "nombre": "Auditoría tributaria",
            "requisitos": [
              "Auditoría 2",
              "Tributación 2",
              "Taller tributario"
            ]
          },
          {
            "nombre": "Auditoría de gestión",
            "requisitos": [
              "Auditoría 2",
              "Control de gestión"
            ]
          },
          {
            "nombre": "Electivo 2",
            "requisitos": []
          },
          {
            "nombre": "Seminario de título",
            "requisitos": [
              "Auditoría 2",
              "Auditoría 3",
              "Finanzas 2"
            ]
          },
          {
            "nombre": "Finanzas 3",
            "requisitos": [
              "Finanzas 2"
            ]
          }
        ]
      }
    ]
  }
];

function crearMalla() {
  const container = document.getElementById("mallaContainer");
  const aprobados = new Set(JSON.parse(localStorage.getItem("ramosAprobados")) || []);

  mallaData.forEach(anioData => {
    const anioDiv = document.createElement("div");
    anioDiv.className = "anio";
    const titulo = document.createElement("h2");
    titulo.textContent = anioData.anio;
    anioDiv.appendChild(titulo);

    anioData.semestres.forEach(sem => {
      const semDiv = document.createElement("div");
      semDiv.className = "semestre";
      const h3 = document.createElement("h3");
      h3.textContent = sem.nombre;
      semDiv.appendChild(h3);

      sem.ramos.forEach(ramo => {
        const div = document.createElement("div");
        div.className = "ramo";
        div.textContent = ramo.nombre;
        div.title = ramo.requisitos.length ? `Requiere: ${ramo.requisitos.join(", ")}` : "Sin requisitos";

        const habilitado = ramo.requisitos.every(req => aprobados.has(req));
        if (aprobados.has(ramo.nombre)) {
          div.classList.add("aprobado");
        } else if (habilitado) {
          div.classList.add("habilitado");
        }

        div.addEventListener("click", () => {
          if (aprobados.has(ramo.nombre)) {
            aprobados.delete(ramo.nombre);
          } else if (habilitado) {
            aprobados.add(ramo.nombre);
          }
          localStorage.setItem("ramosAprobados", JSON.stringify([...aprobados]));
          location.reload();
        });

        semDiv.appendChild(div);
      });

      anioDiv.appendChild(semDiv);
    });

    container.appendChild(anioDiv);
  });
}

document.addEventListener("DOMContentLoaded", crearMalla);
