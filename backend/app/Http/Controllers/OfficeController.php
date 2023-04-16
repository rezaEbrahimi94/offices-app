<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\OfficeRequest; 
Use App\Models\Office;

class OfficeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(OfficeRequest $request)
    {
        $offices = Office::query();
        if ($request->has('name')) {
            $offices->where('name', 'like', '%' . $request->name . '%');
        }
        if ($request->has('offices')) {
            $offices->where('offices', $request->offices);
        }
        if ($request->has('tables')) {
            $offices->where('tables', $request->tables);
        }
        if ($request->has('sqm_from')) {
            $offices->where('sqm', '>=', $request->sqm_from);
        }
        if ($request->has('sqm_to')) {
            $offices->where('sqm', '<=', $request->sqm_to);
        }
        if ($request->has('price_from')) {
            $offices->where('price', '>=', $request->price_from);
        }
        if ($request->has('price_to')) {
            $offices->where('price', '<=', $request->price_to);
        }

        return response()->json($offices->get());
    }

}
