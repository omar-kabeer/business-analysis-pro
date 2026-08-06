---
type: deliverable
domain: healthcare
status: draft
version: 1.0.0
---

# FHIR Resource Mapping

## Purpose

Map a clinical data need to the FHIR resources, profiles, and elements that carry it, so requirements, integration, and testing work from one agreed definition. Use it when specifying health data that must be read from or written to a FHIR API.

## Document Control

| Field | Value |
| --- | --- |
| Data need or exchange |  |
| FHIR version and implementation guide (for example R4, US Core v7) |  |
| Business Analyst |  |
| Version | 1.0.0 |
| Status | Draft |
| Last Updated |  |

## Resource mapping

| Business data item | FHIR resource | US Core profile | Element (path) | USCDI element | Cardinality | Terminology or code system | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Patient identity |  | US Core Patient |  |  |  |  |  |
| Diagnosis |  | US Core Condition |  |  |  |  |  |
| Observation or result |  | US Core Observation |  |  |  |  |  |
| Medication |  | US Core MedicationRequest |  |  |  |  |  |

## Access and authorisation

State how the data is accessed (SMART on FHIR scopes, patient or provider authorisation) and any consent constraints.

## Review criteria

- The FHIR version and implementation guide are named and current.
- Each item maps to a resource, profile, and element, with the code system where relevant.
- USCDI elements are covered where required.
- Access and consent are specified.

## Reference

`domain-packs/healthcare-hl7-fhir/terminology.md`; the requirements and architecture skills.
