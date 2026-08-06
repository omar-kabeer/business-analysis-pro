# HL7 and FHIR Terminology

Health Level Seven (HL7) is the main standards body for health data exchange. Two of its standards dominate practice: the older HL7 version 2 messaging and the modern FHIR standard.

## HL7 v2

A long-established messaging standard for events between healthcare systems (admissions, orders, results). It is pipe-and-hat delimited text, widely deployed, and still carries a large share of hospital integration traffic. An analyst will meet it in legacy interfaces.

## FHIR

Fast Healthcare Interoperability Resources is the modern standard: a set of modular resources exchanged over web APIs (usually REST and JSON). It is easier to implement and is the direction of travel for interoperability.

- Version: FHIR R4 is the production standard used by major electronic health record vendors and mandated by current United States rules. R5 exists but is not the production target for the United States; the next United States realm version is planned on R6, skipping R5.
- Resources: the building blocks, each a defined data structure. Common ones include Patient, Practitioner, Encounter, Observation, Condition, MedicationRequest, AllergyIntolerance, Procedure, and DocumentReference.
- Bundles: collections of resources exchanged together.
- References: resources link to one another (an Observation references a Patient).

## US Core and USCDI

- USCDI (United States Core Data for Interoperability): the standardised set of health data classes and elements that must be exchangeable. It advances in versions (v5 published July 2024, v6 July 2025), each adding data elements.
- US Core: the FHIR implementation guide that profiles FHIR resources to carry USCDI. US Core v7 aligns with USCDI v5 on FHIR R4. Profiles constrain the base resources for the United States context.

## Profiles and implementation guides

The base FHIR resources are broad, so communities publish profiles (constraints on a resource) and implementation guides (a coherent set of profiles and rules for a use case). US Core is the main United States example. Always design to the relevant implementation guide, not the raw base resource.

## SMART on FHIR

A standard for apps to authenticate and access FHIR data securely using OAuth 2.0, so third-party apps can plug into electronic health records with patient or provider authorisation.

## Why this matters for requirements

FHIR gives precise, standardised structures for clinical data and APIs for exchange. Requirements should name the resources and the implementation guide (for example US Core on R4), the data elements (against USCDI), and the authorisation model (SMART on FHIR), so integration is interoperable and compliant.
