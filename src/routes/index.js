import Main from "@/components/views/main/Main";
import Fhir from "@/components/views/fhir/Fhir";

const routes = [
  {path: '/', component: Main},
  {path: '/fhir', component: Fhir},
]

export default routes