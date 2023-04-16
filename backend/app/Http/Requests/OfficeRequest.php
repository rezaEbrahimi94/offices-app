<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class OfficeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'nullable|string|max:255',
            'offices' => 'nullable|integer',
            'tables' => 'nullable|integer',
            'sqm_from' => 'nullable|numeric|min:0',
            'sqm_to' => 'nullable|numeric|min:0',
            'price_from' => 'nullable|numeric|min:0',
            'price_to' => 'nullable|numeric|min:0',
        ];
    }

    public function messages()
{
    return [
        'name.string' => 'The name must be a string',
        'name.max' => 'The name may not be greater than :max characters',
        'offices.integer' => 'The offices field must be an integer',
        'tables.integer' => 'The tables field must be an integer',
        'sqm_from.numeric' => 'The sqm from field must be a number',
        'sqm_from.min' => 'The sqm from field must be at least :min',
        'sqm_to.numeric' => 'The sqm to field must be a number',
        'sqm_to.gt' => 'The sqm to field must be greater than sqm from',
        'price_from.numeric' => 'The price from field must be a number',
        'price_from.min' => 'The price from field must be at least :min',
        'price_to.numeric' => 'The price to field must be a number',
        'price_to.gt' => 'The price to field must be greater than price from',
    ];
}


}

