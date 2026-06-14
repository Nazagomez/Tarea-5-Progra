<script setup>
import { computed, ref } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';
import Listbox from 'primevue/listbox';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import {
  autores,
  libros,
  editoriales,
  clasificaciones,
  nacionalidades,
  ediciones,
} from './data/mock-data.js';

const activeAccordion = ref(['1']);
const activeTab = ref('1');
const showClasificacionPanel = ref(false);

const selectedAutorId = ref(2);
const selectedLibroId = ref(1);
const selectedEditorialId = ref(1);
const selectedClasificacionId = ref(1);

const selectedAutor = computed(() => autores.find((item) => item.id === selectedAutorId.value));
const selectedLibro = computed(() => libros.find((item) => item.id === selectedLibroId.value));
const selectedEditorial = computed(() => editoriales.find((item) => item.id === selectedEditorialId.value));
const selectedClasificacion = computed(() => clasificaciones.find((item) => item.id === selectedClasificacionId.value));

const libroAutoresSeleccionados = ref(['Mark Twain']);

function selectAutor(id) {
  selectedAutorId.value = id;
  showClasificacionPanel.value = false;
  activeTab.value = '0';
  activeAccordion.value = ['0'];
}

function selectLibro(id) {
  selectedLibroId.value = id;
  const libro = libros.find((item) => item.id === id);
  libroAutoresSeleccionados.value = libro ? [...libro.autores] : [];
  showClasificacionPanel.value = false;
  activeTab.value = '1';
  activeAccordion.value = ['1'];
}

function selectEditorial(id) {
  selectedEditorialId.value = id;
  showClasificacionPanel.value = false;
  activeTab.value = '2';
  activeAccordion.value = ['2'];
}

function selectClasificacion(id) {
  selectedClasificacionId.value = id;
  showClasificacionPanel.value = true;
  activeAccordion.value = ['3'];
}

function openEditorialFromLibro() {
  if (!selectedLibro.value) {
    return;
  }
  selectedEditorialId.value = selectedLibro.value.editorialId;
  activeTab.value = '2';
  activeAccordion.value = ['2'];
}

function handleCancel() {
  window.alert('Operación cancelada (demostración sin persistencia de datos).');
}

function handleOk() {
  window.alert('Datos confirmados (demostración sin persistencia de datos).');
}
</script>

<template>
  <div class="app-shell">
    <h1 class="app-title">Sistema de Biblioteca</h1>

    <div class="main-layout">
      <aside class="sidebar">
        <Accordion v-model:value="activeAccordion" multiple>
          <AccordionPanel value="0">
            <AccordionHeader>Autores</AccordionHeader>
            <AccordionContent>
              <div class="sidebar-actions">
                <Button label="Nuevo" size="small" />
                <Button label="Borrar" size="small" severity="secondary" />
              </div>
              <ul class="sidebar-list">
                <li
                  v-for="autor in autores"
                  :key="autor.id"
                  class="sidebar-list-item"
                  :class="{ selected: autor.id === selectedAutorId }"
                  @click="selectAutor(autor.id)"
                >
                  {{ autor.nombre }}
                </li>
              </ul>
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel value="1">
            <AccordionHeader>Libros</AccordionHeader>
            <AccordionContent>
              <div class="sidebar-actions">
                <Button label="Nuevo" size="small" />
                <Button label="Borrar" size="small" severity="secondary" />
              </div>
              <ul class="sidebar-list">
                <li
                  v-for="libro in libros"
                  :key="libro.id"
                  class="sidebar-list-item"
                  :class="{ selected: libro.id === selectedLibroId }"
                  @click="selectLibro(libro.id)"
                >
                  {{ libro.nombre }}
                </li>
              </ul>
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel value="2">
            <AccordionHeader>Editoriales</AccordionHeader>
            <AccordionContent>
              <div class="sidebar-actions">
                <Button label="Nuevo" size="small" />
                <Button label="Borrar" size="small" severity="secondary" />
              </div>
              <ul class="sidebar-list">
                <li
                  v-for="editorial in editoriales"
                  :key="editorial.id"
                  class="sidebar-list-item"
                  :class="{ selected: editorial.id === selectedEditorialId }"
                  @click="selectEditorial(editorial.id)"
                >
                  {{ editorial.nombre }}
                </li>
              </ul>
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel value="3">
            <AccordionHeader>Clasificación</AccordionHeader>
            <AccordionContent>
              <div class="sidebar-actions">
                <Button label="Nuevo" size="small" />
                <Button label="Borrar" size="small" severity="secondary" />
              </div>
              <ul class="sidebar-list">
                <li
                  v-for="clasificacion in clasificaciones"
                  :key="clasificacion.id"
                  class="sidebar-list-item"
                  :class="{ selected: clasificacion.id === selectedClasificacionId }"
                  @click="selectClasificacion(clasificacion.id)"
                >
                  {{ clasificacion.nombre }}
                </li>
              </ul>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </aside>

      <main class="content-panel">
        <Tabs v-model:value="activeTab">
          <TabList>
            <Tab value="0">Autor</Tab>
            <Tab value="1">Libro</Tab>
            <Tab value="2">Editorial</Tab>
          </TabList>

          <TabPanels>
            <TabPanel value="0">
              <h2 class="section-header">Detalle de autor</h2>
              <div v-if="selectedAutor" class="form-grid">
                <label class="form-label" for="autor-nombre">Nombre</label>
                <InputText id="autor-nombre" v-model="selectedAutor.nombre" />

                <label class="form-label" for="autor-ocupacion">Ocupación</label>
                <InputText id="autor-ocupacion" v-model="selectedAutor.ocupacion" />

                <label class="form-label" for="autor-nacionalidad">Nacionalidad</label>
                <Select
                  id="autor-nacionalidad"
                  v-model="selectedAutor.nacionalidad"
                  :options="nacionalidades"
                  option-label="label"
                  option-value="value"
                />

                <label class="form-label">Género</label>
                <Listbox
                  v-if="selectedAutor"
                  v-model="selectedAutor.generos"
                  :options="selectedAutor.generos"
                  multiple
                  style="height: 120px"
                />

                <label class="form-label" for="autor-seudonimo">Seudónimo</label>
                <InputText id="autor-seudonimo" v-model="selectedAutor.seudonimo" />
              </div>

              <DataTable
                v-if="selectedAutor"
                :value="selectedAutor.libros"
                class="mt-4"
                striped-rows
              >
                <Column field="libro" header="Libro" />
                <Column field="editorial" header="Editorial" />
                <Column field="anio" header="Año" />
                <Column field="edicion" header="Edición" />
              </DataTable>

              <div class="form-actions">
                <Button label="Cancel" severity="secondary" @click="handleCancel" />
                <Button label="OK" @click="handleOk" />
              </div>
            </TabPanel>

            <TabPanel value="1">
              <h2 class="section-header">Detalle de libro</h2>
              <div v-if="selectedLibro" class="form-grid">
                <label class="form-label" for="libro-nombre">Nombre</label>
                <InputText id="libro-nombre" v-model="selectedLibro.nombre" />

                <label class="form-label" for="libro-isbn">ISBN</label>
                <InputText id="libro-isbn" v-model="selectedLibro.isbn" />

                <label class="form-label" for="libro-anio">Año</label>
                <InputNumber id="libro-anio" v-model="selectedLibro.anio" />

                <label class="form-label" for="libro-edicion">Edición</label>
                <Select
                  id="libro-edicion"
                  v-model="selectedLibro.edicion"
                  :options="ediciones"
                  option-label="label"
                  option-value="value"
                />

                <label class="form-label">Editorial</label>
                <div class="flex align-items-center gap-2 flex-wrap">
                  <span class="editorial-link" @click="openEditorialFromLibro">
                    {{ selectedLibro.editorialNombre }}
                  </span>
                  <Button label="Cambiar editorial" size="small" severity="secondary" />
                </div>

                <label class="form-label">Autores</label>
                <div class="authors-row">
                  <Listbox
                    v-model="libroAutoresSeleccionados"
                    :options="selectedLibro.autores"
                    style="width: 220px; height: 120px"
                  />
                  <div class="authors-actions">
                    <Button label="Agregar autor" size="small" />
                    <Button label="Eliminar autor" size="small" severity="secondary" />
                  </div>
                </div>
              </div>

              <div class="form-actions">
                <Button label="Cancel" severity="secondary" @click="handleCancel" />
                <Button label="OK" @click="handleOk" />
              </div>
            </TabPanel>

            <TabPanel value="2">
              <h2 class="section-header">Detalle de editorial</h2>
              <div v-if="selectedEditorial" class="editorial-card">
                <div class="form-grid">
                  <label class="form-label" for="editorial-nombre">Nombre</label>
                  <InputText id="editorial-nombre" v-model="selectedEditorial.nombre" />

                  <label class="form-label" for="editorial-pais">País</label>
                  <InputText id="editorial-pais" v-model="selectedEditorial.pais" />

                  <label class="form-label" for="editorial-fundacion">Fundación</label>
                  <InputNumber id="editorial-fundacion" v-model="selectedEditorial.fundacion" />

                  <label class="form-label" for="editorial-sitio">Sitio web</label>
                  <InputText id="editorial-sitio" v-model="selectedEditorial.sitioWeb" />

                  <label class="form-label" for="editorial-descripcion">Descripción</label>
                  <InputText id="editorial-descripcion" v-model="selectedEditorial.descripcion" />
                </div>

                <div class="editorial-stats">
                  <div class="stat-box">
                    <div class="stat-value">{{ selectedEditorial.librosPublicados }}</div>
                    <div class="stat-label">Libros publicados</div>
                  </div>
                  <div class="stat-box">
                    <div class="stat-value">{{ selectedEditorial.fundacion }}</div>
                    <div class="stat-label">Año de fundación</div>
                  </div>
                  <div class="stat-box">
                    <div class="stat-value">{{ selectedEditorial.pais }}</div>
                    <div class="stat-label">País de origen</div>
                  </div>
                </div>
              </div>

              <DataTable
                v-if="selectedEditorial"
                :value="libros.filter((libro) => libro.editorialId === selectedEditorial.id)"
                class="mt-4"
                striped-rows
              >
                <Column field="nombre" header="Libro" />
                <Column field="isbn" header="ISBN" />
                <Column field="anio" header="Año" />
                <Column field="edicion" header="Edición" />
              </DataTable>

              <div class="form-actions">
                <Button label="Cancel" severity="secondary" @click="handleCancel" />
                <Button label="OK" @click="handleOk" />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </main>
    </div>

    <section v-if="showClasificacionPanel && selectedClasificacion" class="content-panel mt-3">
      <h2 class="section-header">Clasificación seleccionada</h2>
      <div class="classification-item">
        <strong>Código:</strong> {{ selectedClasificacion.codigo }}
      </div>
      <div class="classification-item">
        <strong>Nombre:</strong> {{ selectedClasificacion.nombre }}
      </div>
      <div class="classification-item">
        <strong>Descripción:</strong> {{ selectedClasificacion.descripcion }}
      </div>
    </section>
  </div>
</template>
