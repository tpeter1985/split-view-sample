import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class RoutingExtensionService {

    // Returns the paramvalue of the given ActivatedRoute.
    // Also checks for a value upwards the route hierarchy.
    // Used to access matrix params from child components, e.g.:
    // Retrieve the value of the "id" param from the "documents" component in this route:
    // new-candidates/candidate;id=1/documents
    getParam(paramName: string, activatedRoute: ActivatedRoute): string | null {
        let route: ActivatedRoute | null = activatedRoute;
        while (route) {
            const value = route.snapshot.paramMap.get(paramName);
            if (value !== null) {
                return value;
            }
            route = route.parent;
        }
        return null;
    }
}